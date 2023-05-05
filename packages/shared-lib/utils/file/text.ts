// Since the newline character varies by operating system, this function returns the appropriate separator for each OS.
export const getNewline = (): string => {
  return window.navigator.platform.startsWith('Win') ? '\r\n' : '\n';
};

interface ExportAsTextFileProps {
  fileName: string;
  text: string;
}

export function exportAsTextFile({ fileName, text }: ExportAsTextFileProps) {
  const element = document.createElement('a');
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
  element.setAttribute('download', fileName);

  element.style.display = 'none';
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
}
