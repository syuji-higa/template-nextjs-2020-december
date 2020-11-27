// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

type Response = {
  statusCode: number
  json({ name: string }): void
}

export default (_req: void, res: Response): void => {
  res.statusCode = 200
  res.json({ name: 'John Doe' })
}
