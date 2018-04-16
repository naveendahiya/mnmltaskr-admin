// const express = require('express')
// const bodyParser = require('body-parser')
// const path = require('path')
// const webpack = require('webpack')
// const config = require('./webpack.config')
// const devMiddleware = require('webpack-dev-middleware')
// const hotMiddleware = require('webpack-hot-middleware')
// const { MongoClient } = require('mongodb')
// // const firebase = require("firebase");

// const app = express()
// const url = 'mongodb://localhost:27017'
// const dbName = 'mnmltaskr'
// const port = 3000

// let db

// // const config = {
// //   apiKey: "<API_KEY>",
// //   authDomain: "<PROJECT_ID>.firebaseapp.com",
// //   databaseURL: "https://<DATABASE_NAME>.firebaseio.com",
// //   storageBucket: "<BUCKET>.appspot.com",
// // };
// // firebase.initializeApp(config);

// async function getReports (request, response) {
//   try {
//     const reports = await db.collection('reports').find({}).toArray()
//     await response.json(reports)
//   } catch (e) {
//     throw e
//   }
// }

// async function getReportsByMonth (request, response) {
//   try {
//     const reports = await db.collection('reports').aggregate([
//       { $group: {
//           _id: { month: { $month: '$dateTransacted' },
//           year: { $year: '$dateTransacted' } },
//         transactions: { $push: '$$ROOT' }
//       } },
//       { $sort: { month: -1, year:-1 } }
//     ]).toArray()

//     await response.json(reports)
//   } catch (e) {
//     console.log(e)
//     throw e
//   }
// }

// async function startServer () {
//   try {
//     if (process.env.NODE_ENV !== 'production') {
//       const compiler = webpack(config)

//       app
//         .use(devMiddleware(compiler, {
//           noInfo: true, publicPath: config.output.publicPath
//         }))
//         .use(hotMiddleware(compiler))
//     }

//     const client = await MongoClient.connect(url)
//     db = client.db(dbName)

//     app
//       .use(bodyParser.urlencoded({ extended: true }))
//       .use(bodyParser.json())
//       .use('/', express.static(path.join(process.cwd(), 'public')))

//       // more routes here
//       .get('/reports', getReports)
//       .get('/reportsByMonth', getReportsByMonth)

//       .listen(port, () => {
//         console.log(`server live at http://localhost:${port}`)
//       })
//   } catch (e) {
//     throw e
//   }
// }

// startServer()
