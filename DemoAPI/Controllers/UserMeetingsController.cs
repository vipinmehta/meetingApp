using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;

namespace DemoAPI.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class UserMeetingsController : ApiController
    {

        private MeetingDBContext db = new MeetingDBContext();

        public List<UserMeetings> GetUserMeetings()
        {
            var meetingUsers = new List<UserMeetings>();
            var meetings = db.Meetings;
            var users = string.Empty;
            users = string.Join(",", meetings.Select(x => x.Attendees));
            //foreach (var meeting in meetings)
            //{
            //    users += meeting.Attendees + ',';
            //}

            
            var usersList = users.Split(',').ToList();
             
            var groupedUsers = usersList
            .GroupBy(s => s)
            .Select(g => new { User = g.Key, Meetings = g.Count() });

            //usersList =usersList.Select(x => x.Trim()).ToList();

            //var uniqueUsers = usersList.Distinct();




            UserMeetings userMeeting;
            foreach (var user in groupedUsers)
            {
                userMeeting = new UserMeetings
                {
                    User = user.User,
                    NoOfMeetings = user.Meetings
                };
                meetingUsers.Add(userMeeting);
            }

            return meetingUsers;
        }
    }
    public class UserMeetings
    {
        public string User { get; set; }
        public int NoOfMeetings { get; set; }
    }
}