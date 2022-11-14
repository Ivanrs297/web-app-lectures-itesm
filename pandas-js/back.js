const dfd = require("danfojs-node")
const path = require("path")

let local_xcel = path.join(process.cwd(), "test.xlsx")

async function load_process_data() {
    let df = await dfd.readExcel(local_xcel)
    df.head().print()
}

load_process_data()