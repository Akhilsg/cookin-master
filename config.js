module.exports = {
    port: 5000,
    db: "mongodb+srv://learning_pawn:lpc123@cluster0.3ieir.mongodb.net/cookin",
    jwtSecret: "cookin-secret",
    refreshSecret: "cookin-secret-refresh",
    googleClientId: process.env.GOOGLE_ID,
    googleSecret: "cookin-secret-google",
    secretAccessKey: process.env.AWS_SECRET,
    accessKey: process.env.AWS_ACCESS_KEY,
    region: process.env.AWS_REGION,
    bucket: process.env.BUCKET,
};
