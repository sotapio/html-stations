async function getData() {
  // Promiseを使った実装をやってみましょう！APIとの通信でよく使う表現になります！
  // ３秒後にフルネームのリストを表示されるようにしましょう。
  // 最初から表示されていると、クリアになりません。
  const userList = [
    { id: 1, first_name: '優', family_name: '大木', affiliation: 'TechTrain', is_student: false },
    { id: 2, first_name: '太郎', family_name: '山田', affiliation: 'HogeHoge大学', is_student: true }
  ];

  const fullNameList = userList.map(data => {return {...data, full_name: data.family_name + " " +  data.first_name}});
  console.log(fullNameList);

  const result = await test(fullNameList)
  return await result
}

async function test(fullNameList) {
  const sleep = () => new Promise(resolve => {
    setTimeout(() => {
      resolve()
    }, 3000)
  })

  await sleep()
  return fullNameList;
}