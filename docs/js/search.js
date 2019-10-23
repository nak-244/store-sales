(function($){
    $(function() {
      var href = "https://sigotora.jp/index.cfm";
      $('#srh_ken_param,#sfw,.srh_jobtype_child_param').on('change', function() {
        var srh_ken_param = $('#srh_ken_param').val();
        var sfw = $('#sfw').val();
        var srh_jobtype_child_param = $('.srh_jobtype_child_param:checked').map(function() {
                      return $(this).val();
                    }).get();
        $('#test').prop('href', href + "?fuseaction=job.joblist&srh_jobtype_param=5&srh_ken_param=" + srh_ken_param + "&sfw=" + sfw + "&srh_jobtype_child_param=" + srh_jobtype_child_param);
      });
    });
})($331)
