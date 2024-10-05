﻿namespace Versta_test_project.Server.Models
{
    public class Order
    {
        public int Id { get; set; }
        public string SenderCity { get; set; }
        public string SenderAddress { get; set; }
        public string ReceiverCity { get; set; }
        public string ReceiverAddress { get; set; }
        public decimal Weight { get; set; }
        public DateTime PickupDate { get; set; }
    }
}
