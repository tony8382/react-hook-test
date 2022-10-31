// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { GetServerSideProps, NextApiRequest, NextApiResponse } from "next"

export type Data = {
  name: string
}
export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  res.statusCode = 404;
  return { props: {} }
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  console.log('The value of PORT is:', process.env.JAVA_HOME);
  console.log('The value of PORT is:', process.env.NEXT_PUBLIC_A);
  console.log('The value of PORT is:', process.env.NEXT_PUBLIC_B);
  console.log('The value of PORT is:', process.env.NEXT_PUBLIC_C);
  console.log('The value of PORT is:', process.env.A);
  console.log('The value of PORT is:', process.env.B);
  console.log('The value of PORT is:', process.env.C);

  // res.status(200).json({ name: 'John Doe' })
  res.status(200).json({ name: 'John Doe' })
}
