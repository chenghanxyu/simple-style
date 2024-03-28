var url = "https://graph.facebook.com/v19.0/";
var ig_id = "17841403962714413";
var fields = "media_url,shortcode,media_type,like_count";
var access_token = ""

var appUri = "https://graph.facebook.com/v19.0/17841403962714413/media?fields=media_url,shortcode,media_type,like_count&access_token=EAAJH2RRVLZB4BO6xhGZAZAOJPAttxqEec8ziJf7sFZCZAoEr0k6emvEPkye0ZAOt7GGOM7uZCZAhbP4eOi5DwWWKYKXoaeEGZBxB3ZAxjXUZCfJPZBrHGHtBg4HWQJ1BI7OD2dAL5XWdC7hiERs6XI4mMHIPGmOsoTaANp81htvxsaZCxnFltjkvSHoTWkDZCkK9M4ZBL7D8fpuqbYYMADBCPdDXgZDZD";
$.get(appUri, function (data) {
    console.log(data.data);
    var ig_data = data.data;
    var filteredData = $.grep(ig_data, function (item) {
        return item.media_type === 'IMAGE' || item.media_type === 'CAROUSEL_ALBUM';
    });
    console.log(filteredData);

    let firstFourItems = filteredData.slice(0, 4);

    $.each(firstFourItems, function (index, item) {
        var html = `<div class="photography-list">
                    <div class="photo-img"
                        style="background-image: url(${item.media_url});">
                        <a class="hover" href="https://www.instagram.com/p/${item.shortcode}/" target="_blank">
                            <svg id="Layer_1_1_" style="enable-background:new 0 0 16 16;fill:#fff" version="1.1" viewBox="0 0 16 16" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M8.612,2.347L8,2.997l-0.612-0.65c-1.69-1.795-4.43-1.795-6.12,0c-1.69,1.795-1.69,4.706,0,6.502l0.612,0.65L8,16  l6.12-6.502l0.612-0.65c1.69-1.795,1.69-4.706,0-6.502C13.042,0.551,10.302,0.551,8.612,2.347z"/></svg>
                            <p class="like_count">${item.like_count}</p>
                        </a>
                    </div>
                </div>`
        $('#ig-list').append(html);
    });
}, 'json');