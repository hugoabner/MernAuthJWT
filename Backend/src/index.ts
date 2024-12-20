import express from 'express';

const app  = express();


app.get("/", (req, res) => {
	res.status(200).json({
		status: "Success",
	})
});

app.listen(4004, () => {
	console.log('Servidor ejecutandose en el puerto 4004');
}) 