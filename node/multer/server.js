// Step 1: Import required modules
const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

// Step 2: Initialize express app
const app = express();

// Step 3: Serve static files (HTML, CSS, etc.)
app.use(express.static('public'));

// Step 4: Create the uploads directory if it doesn't exist
const uploadDir = path.resolve(__dirname, 'uploads');

// Step 5: Set up multer storage configuration
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, uploadDir); // Save files in the 'uploads' folder
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname)); // Filename pattern
    }
});

// Step 6: Initialize multer with storage and file size limit
const upload = multer({
    storage: storage,
    limits: { fileSize: 5 * 1024 * 1024 }, // Limit file size to 5MB
    // fileFilter: (req, file, cb) => {
    //     // Only allow image file types
    //     const filetypes = /jpeg|jpg|png|gif/;
    //     const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
    //     const mimetype = filetypes.test(file.mimetype);

    //     if (extname && mimetype) {
    //         cb(null, true);
    //     } else {
    //         cb(new Error('Only images are allowed'));
    //     }
    // }
}).single('image');

// Step 7: Set up file upload route
app.post('/upload', (req, res) => {
    upload(req, res, (err) => {
        if (err instanceof multer.MulterError) {
            return res.status(400).send({ message: err.message });
        } else if (err) {
            return res.status(400).send({ message: err.message });
        } else if (!req.file) {
            return res.status(400).send({ message: 'No file uploaded' });
        }

        res.status(200).send({ message: 'File uploaded successfully!', file: req.file });
    });
});
// Route to list uploaded files
app.get('/uploads', (req, res) => {
    fs.readdir(uploadDir, (err, files) => {
        console.log("mdslfnl")
        if (err) {
            return res.status(500).send({ message: 'Unable to fetch files' });
        }
        console.log(files)
        res.json(files); // Send the list of files as JSON
    });
});
app.get('/uploads/:filename', (req, res) => {
    const filename = req.params.filename;
    const filePath = path.join(uploadDir, filename);

    res.sendFile(filePath, (err) => {
        if (err) {
            res.status(err.status).send({ message: 'File not found' });
        }
    });
});



// Step 8: Serve the uploaded files publicly
app.use('/uploads', express.static('uploads'));

// Step 9: Start the server
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
