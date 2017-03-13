var search_indexes = null;
 
    function doSearch(query) {
        if (search_indexes == null) return;
        var s_res = search_indexes.search(query);
        var t_html = '<ul>';
        for (var i = 0; i < s_res.length; i++) {
            var t_pos = s_res[i].ref.lastIndexOf('/');
            t_html += '<li><a href="#!' + s_res[i].ref + '">' + (t_pos >= 0 ? s_res[i].ref.substr(t_pos + 1) : s_res[i].ref) + '</a></li>';
        }
        t_html += '</ul>';
        $('#search-result-body').html(t_html);
        $('#search-result-label').html('Search result for: ' + query);
        $('#search-result').modal('show');
    }
 
    function search_content(query) {
        if (search_indexes == null) {
            $.getJSON("search_index.json", function(data){
                if (data != null) search_indexes = lunr.Index.load(data);
                doSearch(query);
            });
        } else
            doSearch(query);
    }
 
    $(document).bind('DOMNodeInserted', function(e) {
        if ($('#search_input').length <= 0) return;
        $(document).unbind('DOMNodeInserted');
 
        $('#search_input').bind('click', function(event) {
            event.stopPropagation();
            return false;
        });
        $('#search_input').bind('keypress', function(event){
            if (event.keyCode == '13')
                search_content($(this).val());
        });
    });