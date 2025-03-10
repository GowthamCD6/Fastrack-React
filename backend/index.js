import express from "express"
import mysql2 from "mysql2"
import cors from "cors"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

const app = express()

const db = mysql2.createConnection({
    host: "localhost",
    user: "root",
    password: "GCN@6677",
    database: "fast",
})

app.use(express.json())
app.use(cors())


app.get("/", (req, res) => {
    res.json("hello this is backend")
})

app.get("/watchs", (req, res) => {
    const q = "SELECT * FROM watchs"
    db.query(q, (err, data) => {
        if (err) return res.json(err)
        return res.json(data)
    })
})

app.get("/awatch", (req, res) => {
    const q = "SELECT * FROM watchs where type='watch'"
    db.query(q, (err, data) => {
        if (err) return res.json(err)
        return res.json(data)
    })
})

app.get("/accessories", (req, res) => {
    const q = "SELECT * FROM watchs where type='accessories'"
    db.query(q, (err, data) => {
        if (err) return res.json(err)
        return res.json(data)
    })
})

app.get("/smartwatchs", (req, res) => {
    const q = "SELECT * FROM watchs where type = 'smartwatch'"
    db.query(q, (err, data) => {
        if (err) return res.json(err)
        return res.json(data)
    })
})

app.get("/watchs", (req, res) => {
    const q = "SELECT * FROM watchs where type = 'watch'"
    db.query(q, (err, data) => {
        if (err) return res.json(err)
        return res.json(data)
    })
})

app.get("/reflextunes", (req, res) => {
    const q = "SELECT * FROM watchs where type = 'reflextunes'"
    db.query(q, (err, data) => {
        if (err) return res.json(err)
        return res.json(data)
    })
})

app.get("/home", (req, res) => {
    const q = "SELECT * FROM watchs where type = 'home'"
    db.query(q, (err, data) => {
        if (err) return res.json(err)
        return res.json(data)
    })
})



app.post("/watchs", (req, res) => {
    const q = "INSERT INTO watchs (`title`,`desc`,`price`,`cover`, `type`) VALUES (?, ? , ?, ?, ?)"
    const values = [
        req.body.title,
        req.body.desc,
        req.body.price,
        req.body.cover,
        req.body.type
        // "title from backend",
        // "desc from backend",
        // "cover pic from backend"
    ]


    db.query(q, values, (err, data) => {
        if (err) {
            console.error("Database Insertion Error:", err);
            return res.status(500).json({ error: "Database insertion failed", details: err });
        }
        return res.status(201).json({ message: "Watch has been created successfully", data });
    });
});


app.delete("/watchs/:id", (req,res)=>{
    const watchId = req.params.id;
    const q = "DELETE FROM watchs Where id = ?"

    db.query(q, [watchId], (err,data) => {
        if (err) return res.json(err);
        return res.json("Watch has been deleted successfully.")
    })
})



app.put("/watchs/:id", (req,res)=>{
    const watchId = req.params.id;
    const q = "UPDATE watchs SET `title`= ?, `desc`= ?, `price`= ?, `cover`= ?, `type` = ? WHERE id = ?"

    const values = [
        req.body.title,
        req.body.desc,
        req.body.price,
        req.body.cover,
        req.body.type
    ]

    console.log(req.body)

    db.query(q, [...values,watchId], (err,data) => {
        if (err) {
            console.log(err)
            return res.json(err);}
        return res.json("Watch has been updated successfully.")
    })
})

app.post("/login", (req, res) => {
    const { email, password } = req.body;
    const sql = "SELECT * FROM users WHERE email = ?";
    
    db.query(sql, [email], async (err, data) => {
        if (err) return res.status(500).json({ error: "Database error" });
        if (data.length === 0) return res.status(401).json({ error: "User not found" });

        const user = data[0];
        const storedPassword = user.password;
        console.log(storedPassword, password);
        const isBcrypt = storedPassword.startsWith("$2b$") || storedPassword.startsWith("$2a$");
        const match = password === storedPassword;

        if (!match) return res.status(401).json({ error: "Invalid password" });

        const token = jwt.sign({ user_id: user.id, role: user.role }, "secret_key", { expiresIn: "1h" });
        res.json({ success: true, token, user_id: user.id, role: user.role });
    });
});

app.post("/register", async (req, res) => {
    const { name, email, password, role } = req.body;
    if (!name || !email || !password) {
        return res.status(400).json({ message: "All fields are required" });
    }

    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const query = "INSERT INTO users (name, email, password, role) VALUES (?, ?, ?, ?)";
        db.query(query, [name, email, password, role], (err, result) => {
            if (err) {
                if (err.code === "ER_DUP_ENTRY") {
                    return res.status(400).json({ message: "Email already exists" });
                }
                return res.status(500).json({ message: "Database error", error: err });
            }
            res.status(201).json({ message: "User registered successfully" });
        });
    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
});



app.listen(8800, () => {
    console.log("You have conected to BE")
})