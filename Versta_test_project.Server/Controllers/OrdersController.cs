using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Versta_test_project.Server.Data;
using Versta_test_project.Server.Models;

namespace Versta_test_project.Server.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class OrdersController : ControllerBase
    {
        private readonly ILogger<OrdersController> _logger;
        private readonly ApplicationDbContext _context;

        public OrdersController(ILogger<OrdersController> logger, ApplicationDbContext context)
        {
            _logger = logger;
            _context = context;
        }

        [HttpPost]
        public async Task<ActionResult<Order>> CreateOrder(Order order)
        {
            if (!ModelState.IsValid)
            {
                _logger.LogWarning("Invalid order data received");
                return BadRequest(ModelState);
            }

            try
            {
                _context.Orders.Add(order);
                await _context.SaveChangesAsync();
                _logger.LogInformation("Order created successfully");
                return Ok(new { Message = "Order created successfully", OrderId = order.Id });
            }
            catch (DbUpdateException ex)
            {
                _logger.LogError(ex, "Database error occurred while creating order");
                return StatusCode(500, "Internal server error");
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "An unexpected error occurred while creating order");
                return StatusCode(500, "Internal server error");
            }
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Order>>> GetOrders()
        {
            try
            {
                var orders = await _context.Orders.ToListAsync();
                _logger.LogInformation("Orders retrieved successfully");
                return Ok(orders);
            }
            catch (DbUpdateException ex)
            {
                _logger.LogError(ex, "Database error occurred while retrieving orders");
                return StatusCode(500, "Internal server error");
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "An unexpected error occurred while retrieving orders");
                return StatusCode(500, "Internal server error");
            }
        }
    }
}
