import fs from 'fs';

run(process.argv);

function run(args) {
  return countOrders(parseCommand(args));
}

function parseCommand(args) {
  if (!args[2]) {
    throw new Error('파일 이름을 입력하세요');
  }

  const fileName = `./${args[2]}.json`;
  if (!fs.existsSync(fileName)) {
    throw new Error('파일이 존재하지 않습니다');
  }

  return {
    fileName,
    countReadyOnly: process.argv.includes('-r'),
  };
}

function countOrders(command) {
  const rawData = fs.readFileSync(command.fileName);
  const orders = JSON.parse(rawData);
  const filterdOrders = command.countReadyOnly
    ? orders.filter((order) => order.status === 'ready')
    : orders;
  console.log(filterdOrders.length);
}
