
import { S3Client, PutObjectCommand, GetObjectCommand, DeleteObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { getBucketConfig, createS3Client } from "./aws-config";

const s3Client = createS3Client();

export async function uploadFile(buffer: Buffer, fileName: string): Promise<string> {
  try {
    const { bucketName, folderPrefix } = getBucketConfig();
    const key = `${folderPrefix}uploads/${Date.now()}-${fileName}`;
    
    const command = new PutObjectCommand({
      Bucket: bucketName,
      Key: key,
      Body: buffer,
    });

    await s3Client.send(command);
    return key;
  } catch (error) {
    console.error('Error uploading file:', error);
    throw error;
  }
}

export async function downloadFile(key: string): Promise<string> {
  try {
    const { bucketName } = getBucketConfig();
    
    const command = new GetObjectCommand({
      Bucket: bucketName,
      Key: key,
    });

    const signedUrl = await getSignedUrl(s3Client, command, { expiresIn: 3600 });
    return signedUrl;
  } catch (error) {
    console.error('Error downloading file:', error);
    throw error;
  }
}

export async function deleteFile(key: string): Promise<void> {
  try {
    const { bucketName } = getBucketConfig();
    
    const command = new DeleteObjectCommand({
      Bucket: bucketName,
      Key: key,
    });

    await s3Client.send(command);
  } catch (error) {
    console.error('Error deleting file:', error);
    throw error;
  }
}

export async function renameFile(oldKey: string, newKey: string): Promise<string> {
  // S3 doesn't have native rename, so we copy and delete
  try {
    const { bucketName } = getBucketConfig();
    
    // First get the object
    const getCommand = new GetObjectCommand({
      Bucket: bucketName,
      Key: oldKey,
    });

    const response = await s3Client.send(getCommand);
    const buffer = Buffer.from(await response.Body?.transformToByteArray() || []);

    // Upload with new key
    const fullNewKey = await uploadFile(buffer, newKey);
    
    // Delete old key
    await deleteFile(oldKey);

    return fullNewKey;
  } catch (error) {
    console.error('Error renaming file:', error);
    throw error;
  }
}
