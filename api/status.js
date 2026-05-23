export default async function handler(req, res) {

    try {

        const formData = new URLSearchParams();

        formData.append("sh_st", req.body.sh_st);
        formData.append("grade", req.body.grade);
        formData.append("section", req.body.section);
        formData.append("sex", req.body.sex);
        formData.append("semister", req.body.semister);
        formData.append("limit", req.body.limit);

        const response = await fetch(
            "http://offlix.atwebpages.com/src/b/sh_st.php",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                },
                body: formData
            }
        );

        const text = await response.text();

        console.log(text);

        res.status(200).send(text);

    } catch (error) {

        console.error(error);

        res.status(500).json({
            error: error.message
        });
    }
}