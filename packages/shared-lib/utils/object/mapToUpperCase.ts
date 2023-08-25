interface MapToUpperCaseProps {
  keyList: string[];
  obj: Record<string, any>;
}

export function mapToUpperCase({ keyList, obj }: MapToUpperCaseProps) {
  return keyList.reduce((newObj, key) => {
    newObj[key] = obj[key]?.toUpperCase();

    return newObj;
  }, {} as Record<string, any>);
}
