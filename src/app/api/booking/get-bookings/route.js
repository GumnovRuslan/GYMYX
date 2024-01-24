export const dynamic = 'force-dynamic'; // defaults to force-static
export async function POST(request) {
  if (request.method === 'POST') {
    const requestData = await request.json();

    try {
      const response = await fetch(`https://gymyx.cro.codes/api/bookings`, {
        method: 'GET',
        cache: 'no-store',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${requestData.token}`,
        },
      });

      if (!response.ok) {
        return Response.json({ error: 'Произошла ошибка, попробуйте позже!' });
      }

      const result = await response.json();
      return Response.json({ data: result });
    } catch (error) {
      return Response.json({ error: 'Error fetching data' });
    }
  } else {
    request.status(405).end();
  }
}
