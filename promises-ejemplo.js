createUser = async (name, lastname, age, course) => {
    const users = await this.getUser()
    users.push({name, lastname, age, course})
    return fs.promises.writeFile(this.filename, JSON.stringify(users))
}

getUser = async () => {
    return fs.promises.readFile(this.filename, this.format)
        .then(content => JSON.parse(content))
        .catch(e => {
            console.log('ERROR', e)
            return []
        })
}
