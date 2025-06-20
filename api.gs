function doPost(e) {
  try {
    let data;
    
    // Debug: Log semua yang diterima
    console.log('Received postData:', e.postData);
    console.log('Received parameters:', e.parameter);
    
    // Method 1: Raw POST body (dari XHR/Fetch)
    if (e.postData && e.postData.contents) {
      try {
        data = JSON.parse(e.postData.contents);
      } catch (err) {
        // Jika bukan JSON, coba sebagai form data
        const postDataStr = e.postData.contents;
        if (postDataStr.includes('postman_data=')) {
          const jsonStr = decodeURIComponent(postDataStr.split('postman_data=')[1]);
          data = JSON.parse(jsonStr);
        }
      }
    }
    // Method 2: Form parameter (dari form submission)
    else if (e.parameter.postman_data) {
      data = JSON.parse(e.parameter.postman_data);
    }
    // Method 3: Legacy parameter
    else if (e.parameter.data) {
      data = JSON.parse(e.parameter.data);
    }
    // Method 4: Direct parameters
    else {
      data = e.parameter;
    }
    
    // Validasi data
    if (!data || !data.filename || !data.mimeType || !data.bytes) {
      return jsonResponse({
        status: "error",
        message: "Missing required fields: filename, mimeType, bytes",
        received: data
      });
    }
    
    // Upload ke Google Drive
    const folder = DriveApp.getFolderById("1tqTdK1ReLTZ_geFpby8z5dGIN2qeAZFm");
    const decoded = Utilities.base64Decode(data.bytes);
    const blob = Utilities.newBlob(decoded, data.mimeType, data.filename);
    const file = folder.createFile(blob);
    
    return jsonResponse({
      status: "success",
      message: "File uploaded successfully via web form!",
      fileName: file.getName(),
      fileUrl: file.getUrl(),
      fileId: file.getId()
    });
    
  } catch (error) {
    return jsonResponse({
      status: "error",
      message: error.toString(),
      stack: error.stack
    });
  }
}

function jsonResponse(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj, null, 2))
    .setMimeType(ContentService.MimeType.JSON);
}