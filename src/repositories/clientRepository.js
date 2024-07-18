class ClientRepository {
    findAll() {
        const sql = 'SELECT * from clients'
        return sql
    }

    create(client) {
        const sql =  "INSERT INTO clients SET ?;"
        return sql
    }
}

export default ClientRepository