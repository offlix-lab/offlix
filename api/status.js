export default async function handler(req, res) {
  try {
    const response = await fetch(
      "http://offlix.atwebpages.com/src/b/sh_st.php"
    );

    const data = await response.text();

    res.status(200).send(data);

  } catch (error) {
    res.status(500).json({
      error: error.message
    });
  }
}