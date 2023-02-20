
const API_URL = "https://api-sa-east-1.hygraph.com/v2/cledd0zbo4llj01tbh7gh6ygz/master";

const getSmallGroups = () => {
    const request = { 
        query : `
            query SmallGroups {
                smallGroups {
                    id
                    name
                    nameSlug
                    description
                }
            }
    `};

    fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(request)
    }).then(resp => resp.json())
    .then(data => console.log(data?.data?.smallGroups));
}

const insertSmallGroup = () => {
    const request = {
        query: `
            mutation {
                createSmallGroup(data: {
                    name: "Teste",
                    description: "Descrição teste"
                    nameSlug: "teste"
                }) {
                    id
                }
            }
        `
    };

    fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(request)
    }).then(resp => resp.json())
    .then(data => {
        console.log(data);
        // publishSmallGroup(data?.data?.createSmallGroup?.id);
    });
}

const publishSmallGroup = (id) => {
    console.log("🚀 ~ file: requests.js:51 ~ publishSmallGroup ~ id:", id)
    const request = {
        query: `
            mutation {
                publishSmallGroup(to:PUBLISHED, where:{id: "${id}"}) {
                    id
                }
            }
        `
    };

    fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(request)
    }).then(resp => resp.json())
    .then(data => console.log(data));
}

// getSmallGroups();
insertSmallGroup();
// publishSmallGroup("cledezlcj8s420blxs0kgcxvk");