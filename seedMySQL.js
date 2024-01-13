var mysql = require('mysql2');
var drop = 'TRUNCATE TABLE yasuos;'
var seedQuery = `
  INSERT INTO yasuos (title, nick, avatar, about) VALUES 
  ("Nightbringer", "nightbringer", "/images/Nightbringer.jpg", "Ясуо, рожденный из гноящихся отголосков на заре творения, является адским воплощением хаоса в космосе. Обреченный навсегда сразиться с Несущим Рассвет, он ждет дня, когда его тьма наконец рассечет ее свет."),
  ("Sea Dog", "seadog", "/images/SeaDog.jpg", "Получив силу от Бухру во время битвы против Вьего из Камавора, Ясуо стал маловероятным защитником для детей Нагакабуроса — его одержимость прошлыми событиями шла вразрез со всем, во что они верили. силы тьмы одерживают победу."),
  ("Truth Dragon", "truthdragon", "/images/TruthDragon.jpg", "В одиночку против армии Ясуо решил выстоять и сражаться. Он заблокировал узкий проход между двумя горами, позволив невинным избежать кровопролития. Владея истиной стали как танцем, он сразил бесчисленное количество врагов, но даже он не смог продержаться вечно. Дракон Истины, движимый своим искусством фехтования, спустился со своей вершины, чтобы благословить его…");
`;
var connection = mysql.createConnection({
            host: '127.0.0.1',
            port: '3306',
            user: 'root',
            password: 'yasuo',
            database: 'yasuo'
        });
connection.connect()
console.log("Running SQL seed...")
// Drop content
connection.query(drop, err => {
    if (err) {
        throw err
    }
// Seed content
    connection.query(seedQuery, err => {
        if (err) {
            throw err
        }
        console.log("SQL seed completed!")
        connection.end()
    })
})