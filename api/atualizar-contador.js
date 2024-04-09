module.exports = async (req, res) => {
  try {
    let contador = parseInt(process.env.COUNTER_VALUE || 0);
    contador++;
    process.env.COUNTER_VALUE = contador.toString();
    res.status(200).send({ contador });
  } catch (error) {
    console.error('Erro ao atualizar o contador:', error);
    res.status(500).send('Erro ao atualizar o contador');
  }
};
