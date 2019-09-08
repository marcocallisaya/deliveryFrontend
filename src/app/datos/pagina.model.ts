export interface pagina
{
    count: number
    current_page: number
    links: {next: string}
    per_page: number
    total: number
    total_pages: number
}