import { v2 as cloudinary } from 'cloudinary';

export default defineEventHandler(async (event) => {
  // Check auth and admin role
  const auth = event.context.auth;
  if (!auth || !auth.user || auth.user.role !== 'admin') {
    throw createError({
      statusCode: 403,
      statusMessage: 'Forbidden: Admin access required'
    });
  }

  const config = useRuntimeConfig();
  cloudinary.config({
    cloud_name: config.cloudinary.cloudName,
    api_key: config.cloudinary.apiKey,
    api_secret: config.cloudinary.apiSecret,
    secure: true
  });

  const formData = await readMultipartFormData(event);
  if (!formData || formData.length === 0) {
    throw createError({
      statusCode: 400,
      statusMessage: 'No file uploaded'
    });
  }

  const file = formData[0];
  if (!file || !file.type?.startsWith('image/')) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Only image files are allowed'
    });
  }

  // Convert buffer to base64 for Cloudinary
  const base64File = `data:${file.type};base64,${file.data.toString('base64')}`;

  try {
    const uploadResponse = await cloudinary.uploader.upload(base64File, {
      folder: 'whisper_of_waters',
      resource_type: 'image'
    });

    return {
      url: uploadResponse.secure_url,
      publicId: uploadResponse.public_id
    };
  } catch (err: any) {
    console.error('Cloudinary upload error:', err);
    throw createError({
      statusCode: 500,
      statusMessage: 'Failed to upload image to Cloudinary'
    });
  }
});
