const getSmallGroups = () => {
    const cmsQuery = { 
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

    baseGraphCMSFetch(cmsQuery)
        .then(data => console.log(data?.data?.smallGroups));    
}

const publishSmallGroup = (id) => {    
    const cmsQuery = {
        query: `
            mutation {
                publishSmallGroup(to:PUBLISHED, where:{id: "${id}"}) {
                    id
                }
            }
        `
    };

    baseGraphCMSFetch(cmsQuery);
}

const insertSmallGroup = (name, description) => {
    const slug = generateSlug(name);

    const cmsQuery = {
        query: `
            mutation {
                createSmallGroup(data: {
                    name: "${name}",
                    description: "${description}",
                    nameSlug: "${slug}"
                }) {
                    id
                }
            }
        `
    };

    baseGraphCMSFetch(cmsQuery)
        .then(data => publishSmallGroup(data?.data?.createSmallGroup?.id));
}

const deleteSmallGroup = (id) => {
    const cmsQuery = {
        query: `
            mutation {
                deleteSmallGroup(where:{id: "${id}"}) {
                    id
                }
            }
        `
    };

    baseGraphCMSFetch(cmsQuery)
}

const updateSmallGroup = (name, description, id) => {
    const slug = generateSlug(name);

    const cmsQuery = {
        query: `
            mutation {
                updateSmallGroup(data: {
                    name: "${name}",
                    description: "${description}",
                    nameSlug: "${slug}"
                },where: {id: "${id}"}) {
                    id
                }
            }
        `
    };

    baseGraphCMSFetch(cmsQuery)
        .then(data => publishSmallGroup(id));
}

// getSmallGroups();
