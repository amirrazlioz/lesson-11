import Express from "express"
import cors from "cors"
import fs from "fs"

const app = Express() 
app.use(Express.json())
app.use(cors({
    origin: "*"
}))

const port = 3000;

// Routes API
app.post('/api/register', (req, res) => {
    const { userName, email, password } = req.body;

    console.log(userName, email, password );
    
    // Validate input
    if (userName.length < 4 || userName.length > 8 ||
        !email.includes('@') ||
        password.length < 5 || password.length > 10 || !password.includes('$')) {
        console.log("Invalid data " );
        return res.status(400).json({ error: 'Invalid input' });
    }

    // Save user data to file
    console.log("Save user data to file" );
    const userData = `${userName},${email},${password}\n`;
    fs.appendFileSync('users.txt', userData);

    // Return success response
    res.json({ success: true, userName });
    console.log("Send res" );
});

app.listen(port, () => {
    console.log(`Backend API running at http://localhost:${port}`);
});
