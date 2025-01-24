// const updatedCode = view.replace(
//   /^(.*?)(\)\s*{)/gm,
//   (match, funcName, bracket) => {
//     return `${funcName}${bracket}\n    console.log('${funcName.trim()}');`
//   }
// )
// console.log(updatedCode())

// const lines = view.split('\n') // Разбиваем текст на строки
// const result = lines
//   .map(line => {
//     // Проверяем, содержит ли строка структуру `){`
//     const match = line.match(/^(.*?)(\)\s*{)/)
//     if (match) {
//       const funcName = match[1].trim() // Извлекаем текст до (
//       return `${line}\n    console.log('${funcName}');`
//     }
//     return line // Если не подходит, оставляем строку как есть
//   })
//   .join('\n') // Собираем строки обратно

// console.log(result)
