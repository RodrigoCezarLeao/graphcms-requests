const getAllSmallGroupParticipants = (id) => {
    const cmsQuery = { 
        query : `
            query MyQuery {
                participants(where: {smallGroup: {id : "${id}"}  }) {
                    id
                    name
                    alias
                    type
                    active
                    mail
                    phone                
                }
            }
    `};

    baseGraphCMSFetch(cmsQuery)
        .then(data => console.log(data?.data?.participants));
}

getParticipants();