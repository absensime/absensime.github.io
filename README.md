# 🚀 Google Drive File Uploader

A production-ready HTML file uploader that sends files to Google Drive via Google Apps Script, bypassing CORS restrictions that block standard browser requests.

## ✨ Features

- **CORS-Free Upload**: Uses form POST method to bypass browser CORS restrictions
- **Multiple Upload Methods**: Support for different submission methods (Form POST, XHR, Fetch, URL params)
- **Drag & Drop Interface**: Modern, responsive file upload interface
- **Real-time Progress**: Visual progress indicator during upload
- **File Validation**: Automatic file type detection and validation
- **Error Handling**: Comprehensive error handling with helpful messages
- **Mobile Responsive**: Works seamlessly on desktop and mobile devices

## 🎯 Why This Solution?

**Problem**: Browsers block direct XHR/fetch requests to Google Apps Script due to CORS policy.
**Solution**: This tool uses form POST submission (like Postman) to bypass CORS restrictions safely.

| Method | Browser | Postman | This Tool |
|--------|---------|---------|-----------|
| XHR/Fetch | ❌ CORS Error | ✅ Works | ✅ Works (Form POST) |
| Form POST | ✅ Works | ✅ Works | ✅ Works |

## 🚀 Quick Start

### Step 1: Set Up Google Apps Script

1. Go to [script.google.com](https://script.google.com)
2. Create a new project
3. Replace the default code with the provided script (see Setup Guide in the HTML)
4. Deploy as a web app with "Anyone" access
5. Copy the deployment URL

### Step 2: Configure Google Drive

1. Create a folder in Google Drive
2. Get the folder ID from the URL (the long string after `/folders/`)
3. Replace `YOUR_FOLDER_ID_HERE` in the Apps Script code

### Step 3: Use the Uploader

1. Open `index.html` in any browser
2. Paste your Apps Script URL
3. Select a file to upload
4. Click "Upload to Google Drive"
5. Check the new tab for the upload result

## 📁 File Structure

```
absensime.github.io/
├── index.html          # Main HTML uploader (standalone file)
├── README.md          # This documentation
└── [Your files here]  # Additional website files
```

## 🔧 Google Apps Script Code

The HTML file includes the complete Google Apps Script code in the documentation section. Here's a summary of what it does:

```javascript
function doPost(e) {
  // Parse incoming data from various sources
  // Validate required fields (filename, mimeType, bytes)
  // Upload to Google Drive
  // Return success/error response
}

function doGet(e) {
  // Handle URL parameter uploads
  // Same validation and upload logic
}
```

## 🛠️ Upload Methods Explained

### 1. Form POST (Recommended) ⭐
- **How it works**: Submits a form with JSON data, opens response in new tab
- **Pros**: Bypasses CORS, works like Postman, reliable
- **Cons**: Can't read response in JavaScript (opens new tab)

### 2. XHR (XMLHttpRequest)
- **How it works**: Direct HTTP request with JSON payload
- **Pros**: Can handle response in JavaScript
- **Cons**: Blocked by CORS in browsers

### 3. Fetch API
- **How it works**: Modern JavaScript API for HTTP requests
- **Pros**: Promise-based, modern syntax
- **Cons**: Also blocked by CORS in browsers

### 4. URL Parameter (GET)
- **How it works**: Encodes file data in URL parameters
- **Pros**: Simple, no CORS issues
- **Cons**: Limited by URL length, not suitable for large files

## 🔍 Troubleshooting

### Common Issues

**Q: Getting CORS error?**
A: Use "Form POST" method instead of XHR/Fetch. This bypasses CORS restrictions.

**Q: 403 Forbidden error?**
A: Your Google Apps Script URL might be invalid or not properly deployed. Redeploy and get a new URL.

**Q: File not appearing in Drive?**
A: Check the folder ID in your script and ensure the folder exists and is accessible.

**Q: Upload button not working?**
A: Make sure you've selected a file and entered a valid Apps Script URL.

### Debug Information

The uploader provides detailed debug information in the console and result messages:
- Request method and payload size
- Response status and content
- Error messages with suggestions

## 🔒 Security & Privacy

- Files are uploaded directly to your Google Drive
- No files are stored on intermediate servers
- Apps Script runs under your Google account
- Access can be restricted to specific users in Apps Script settings
- All communication is over HTTPS

## 🌐 Browser Compatibility

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers

## 📱 Mobile Support

The uploader is fully responsive and works on:
- iOS Safari
- Android Chrome
- Mobile Firefox
- Other mobile browsers

## 🎨 Customization

The HTML file is self-contained and can be easily customized:

- **Styling**: Modify the CSS in the `<style>` section
- **Validation**: Add file type or size restrictions
- **UI Elements**: Customize form fields and layout
- **Branding**: Add your logo and colors

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📞 Support

If you encounter any issues:
1. Check the troubleshooting section in the HTML file
2. Verify your Google Apps Script deployment
3. Test with a small file first
4. Check browser console for error messages

---

**Made with ❤️ for seamless file uploads to Google Drive**
