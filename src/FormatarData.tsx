export function FormatarData(data: string) {
    return data.replace(new RegExp('/', 'g'), '.');
}