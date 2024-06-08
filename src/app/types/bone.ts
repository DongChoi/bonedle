export interface Bone {
  location: string;
  size: string;
  shape: string;
  articulations: string[];
  passages: string[];
  other: string[];
  name: string;
}

export interface BoneData {
  [key: string]: Bone;
}

export type BoneKey = keyof BoneData;
export type BoneList = BoneKey[];
