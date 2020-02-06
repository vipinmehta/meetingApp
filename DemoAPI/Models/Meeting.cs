using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace DemoAPI.Models
{
    public class Meeting
    {
        public int MeetingId { get; set; }
        public string MeetingSubject { get; set; }
        public string MeetingAgenda { get; set; }
        public DateTime MeetingTime { get; set; }
        public string Attendees { get; set; }

    }

   
}