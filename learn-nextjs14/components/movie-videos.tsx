import { API_URL } from '../app/(home)/page';

async function getVideos(id: string) {
  console.log(`Fetching videos: ${Date.now()}`);
  await new Promise((resolve) => setTimeout(resolve, 3000));
  const response = await fetch(`${API_URL}/${id}/videos`);
  return response.json();
}

//✅ Error Handling
//app/(movies)/movies/[id]/error.tsx
// async function getVideos(id: string) {
//   console.log(`Fetching videos: ${Date.now()}`);
//   await new Promise((resolve) => setTimeout(resolve, 3000));
//   throw new Error('something broke...');

// }

//얘는 videos에 관한 UI만 가진다.
//페이지가 있으면 하나의 페이지는 여러 개의 component를 가지니까!
export default async function MovieVideos({ id }: { id: string }) {
  const videos = await getVideos(id);
  return <h6>{JSON.stringify(videos)}</h6>;
}
