const page_dropdown_links = [
    {"title": "Project", "link_text": "project"},
    {"title": "Pricing", "link_text": "pricing"},
    {"title": "Team", "link_text": "team"},
    {"title": "FAQs" ,"link_text": 'faq'},
    {"title": "404 Page", "link_text": "404-page-not-found"}
]
//blog dropdown
const blog_dropdown_links = [
    {"title": "Blog", "link_text": "articles"},
    {"title": "Single Blog", "link_text": 'article'},
]

export  function getPageDropDownLinks(){
    return page_dropdown_links
}
export function getBlogDropDownLinks(){
     return blog_dropdown_links
}