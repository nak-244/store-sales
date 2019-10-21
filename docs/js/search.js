    $(function() {
      var href = "https://sigotora.jp/index.cfm";
      $('#srh_ken_param,#sfw').on('change', function() {
        var srh_ken_param = $('#srh_ken_param').val();
        var sfw = $('#sfw').val();
        $('#test').prop('href', href + "?fuseaction=job.joblist&srh_jobtype_param=5&srh_ken_param=" + srh_ken_param + "&sfw=" + sfw);
      });
    });
