import { pool } from "../../../config/db";

export default async function handler(req, res) {
  switch (req.method) {
    case 'GET':
      return await getProducts(req, res);
    case 'POST':
      return await saveProducts(req, res)
  }
}

const getProducts = async (req, res) => {
  try {
    const [result] = await pool.query('SELECT * FROM product');
    return res.status(200).json(result);
  } catch (error) {
    console.error(error)
  }

}


const saveProducts = async (req, res) => {
  try {
    const { name, description, price } = req.body;
    //Para hacer el insert, hay que pasar los valores como un array
    const [result] = await pool.query(`INSERT INTO product (name, description, price) VALUES (?, ?, ?)`, [
      name,
      description,
      price,
    ])
    return res.status(200).json({ name, description, price, id: result.insertId });
  } catch (error) {
    console.error(error)
  }
}