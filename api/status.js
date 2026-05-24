export default async function handler(req, res) {

    try {

        const {
            sh_st,
            grade,
            section,
            sex,
            semister,
            limit
        } = req.body;

        const formData = new URLSearchParams();

        formData.append("sh_st", "all");
        formData.append("grade", "10");
        formData.append("section", "E");
        formData.append("sex", "all");
        formData.append("semister", "1");
        formData.append("limit", "20");

        const fullUrl = `http://offlix.atwebpages.com/src/b/sh_st.php?${formData.toString()}`;

        const response = await fetch("",{
                method: "GET",
            }
        );

        const text = await response.text();

        res.status(200).send(text);

    } catch (error) {

        console.error(error);

        res.status(500).json({
            error: error.message
        });
    }
}