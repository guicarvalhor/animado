module.exports = async (req, res) => {
  try {
    let contador = parseInt(process.env.COUNTER_VALUE || 0);
    res.status(200).send({ contador });
  } catch (error) {
    console.error('Erro ao obter o contador:', error);
    res.status(500).send('Erro ao obter o contador');
  }
};
