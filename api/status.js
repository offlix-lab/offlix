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

        formData.append("sh_st", sh_st);
        formData.append("grade", grade);
        formData.append("section", section);
        formData.append("sex", sex);
        formData.append("semister", semister);
        formData.append("limit", limit);

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