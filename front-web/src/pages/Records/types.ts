export type RecordsResponse = {
  content: RecordItem[];
  totalPages: number;
}

export type RecordItem = {
  id: number;
  name: string;
  age: number;
  moment: string;
  game_platform: Platform;
  game_title: string;
  genre_name: string;
}

export type Platform = 'XBOX' | 'PC' | 'PLAYSTATION';