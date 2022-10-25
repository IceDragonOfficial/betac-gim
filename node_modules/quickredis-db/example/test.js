// Create the RedisClient instance
const redis = require('../index.js')
const client = redis.createClient()


// Create the test function
async function test() {
    await client.set('foo', 'bar').then(res => console.log(`set command worked! Response: ${res}`))
    await client.get('foo').then(res => console.log(`get command worked! Response: ${res}`));
    await client.delete('foo').then(res => console.log(`delete command worked! Response: ${res}`))
    await client.add('foo', 5).then(res => console.log(`add command worked! Response: ${res}`))
    await client.subtract('foo', 4).then(res => console.log(`subtract command worked! Response: ${res}`))
    await client.has('foo').then(res => console.log(`has command worked! Response: ${res}`))
    await client.delete('foo').then(res => console.log(`Cleared testing data!`))

}

client.on('ready', () => {
    console.log('Redis Client Connected.')
    test()
})

client.on('error', err => console.log(`[Redis Client] ${err.name}: ${err.message}`))