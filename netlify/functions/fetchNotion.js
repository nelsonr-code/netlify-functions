import { Client } from '@notionhq/client'

const { NOTION_SECRET, NOTION_DB } = process.env

const notion = new Client({ auth: NOTION_SECRET })

export async function handler(event, context) {
  try {
    const response = await notion.databases.query({
      database_id: NOTION_DB,
      filter: {
        property: 'Status',
        status: {
          equals: 'Published'
        }
      }
    })

    return {
      statusCode: 200,
      body: JSON.stringify(response)
    }
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ msg: error.message })
    }
  }
}
