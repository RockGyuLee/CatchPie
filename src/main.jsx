import React, {useState, useLayoutEffect} from 'react';
import { ScrollView } from 'react-native';
import styled from 'styled-components';
import SQLite from 'react-native-sqlite-storage';

//modules
import MView from './components/View';

SQLite.DEBUG(true);
// SQLite.enablePromise(true);

// var db = SQLite.openDatabase("catchPieDB.db");
// db.transaction((tx) => {
//   tx.executeSql('SELECT * FROM catchPie', [], (tx, results) => {
//       console.log("Query completed");

//       // Get rows with Web SQL Database spec compliance.

//       var len = results.rows.length;
//       for (let i = 0; i < len; i++) {
//         let row = results.rows.item(i);
//         console.log(`Employee name: ${row.name}, Dept Name: ${row.deptName}`);
//       }

//       // Alternatively, you can use the non-standard raw method.

//       /*
//         let rows = results.rows.raw(); // shallow copy of rows Array

//         rows.map(row => console.log(`Employee name: ${row.name}, Dept Name: ${row.deptName}`));
//       */
//     });
// });

function Main(){
    const count = [1,2,3,4,5,6,7,8];
    // const [db, setDB] = useState(null);

    useLayoutEffect(()=>{
        var db = SQLite.openDatabase({name : "catchPieDB.db",createFromLocation: 1},
            (ddb) => {
            }
        );
        console.log("db",db)
        db.transaction(tx => {
            tx.executeSql('SELECT * FROM catchPie', [], (ttx, results)=>{
                let len = results.rows.length;
                for (let i = 0; i < len; i++) {
                    let row = results.rows.item(i);
                    console.log("item", row);
                }
            })
        })
    }, [])

    return (
        <ScrollView>
            {
                count.map( (i, idx ) =>{
                    return (
                        <MView key={idx} idx={idx}/>
                    )
                })
            }
            {/* <MView /> */}
        </ScrollView>
    )
}

export default Main