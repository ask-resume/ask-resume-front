// Since the newline character varies by operating system, this function returns the appropriate separator for each OS.
export const getNewline = (): string => {
  return window.navigator.platform.startsWith('Win') ? '\r\n' : '\n';
};

interface ExportAsTextFileProps<T> {
  fileName: string;
  data: T;
}

export function exportAsTextFile<T>({ fileName, data }: ExportAsTextFileProps<T>) {
  const fileData = typeof data === 'object' ? JSON.stringify(data) : String(data);
  const blob = new Blob([fileData], { type: 'text/plain' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.download = `${fileName}.txt`;
  link.href = url;
  link.click();
}
