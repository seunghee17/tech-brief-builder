export const readTextFile = async (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();

        reader.onload = () => {
            if(typeof reader.result !== "string") {
                reject(new Error("파일 내용을 문자열로 읽을 수 없습니다."));
                return;
            }

            resolve(reader.result);
        };

        reader.onerror = () => {
            reject(new Error("파일을 읽는 중 문제가 발생했습니다."));
        };

        reader.readAsText(file);
    });
}