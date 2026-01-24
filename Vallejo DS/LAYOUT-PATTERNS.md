# Layout Patterns - Vallejo Design System

**Common layout templates and patterns for quick implementation with AI tools — for [Copart.com](https://www.copart.com) UI.**

Vallejo powers Copart.com. Use these patterns when building vehicle search, auctions, member dashboards, bidding flows, and other Copart.com interfaces.

---

## **Copart.com–Specific Patterns**

### **Vehicle Listing / Search Results Row**
```html
<div class="listing-row dashboard-card" style="display: grid; grid-template-columns: 120px 1fr auto; gap: var(--spacing-24); align-items: center; padding: var(--spacing-24);">
    <!-- Thumbnail -->
    <div style="width: 120px; height: 90px; background: var(--color-light-neutral-200); border-radius: var(--border-radius-200); overflow: hidden;">
        <img src="#" alt="Vehicle" style="width: 100%; height: 100%; object-fit: cover;">
    </div>
    
    <!-- Details -->
    <div>
        <h4 style="margin: 0 0 var(--spacing-8); color: var(--color-brand-copart-black);">2020 Ford F-150 • Lot #12345678</h4>
        <p style="margin: 0; color: var(--color-light-neutral-400); font-size: var(--typography-font-size-300);">Odometer: 45,231 mi • Run and Drive</p>
        <div style="display: flex; gap: var(--spacing-8); margin-top: var(--spacing-12);">
            <div class="status-token status-token-success status-token-filled">
                <span class="status-token-label">Running</span>
            </div>
            <button class="btn btn-subtle btn-small">
                <span data-icon="heart" data-icon-size="16"></span>
                Watchlist
            </button>
        </div>
    </div>
    
    <!-- Bid / CTA -->
    <div style="text-align: right;">
        <p style="margin: 0 0 var(--spacing-8); font-size: var(--typography-font-size-300); color: var(--color-light-neutral-400);">Current Bid</p>
        <p style="margin: 0 0 var(--spacing-16); font-size: var(--typography-font-size-500); font-weight: 600;">$4,250</p>
        <button class="btn btn-default btn-default-type">Place Bid</button>
    </div>
</div>
```

### **Auction Lot Card (Grid)**
```html
<div class="dashboard-card" style="overflow: hidden;">
    <div style="aspect-ratio: 16/10; background: var(--color-light-neutral-200);">
        <img src="#" alt="Vehicle" style="width: 100%; height: 100%; object-fit: cover;">
    </div>
    <div class="card-content" style="padding: var(--spacing-16);">
        <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: var(--spacing-8);">
            <h4 style="margin: 0; color: var(--color-brand-copart-black);">2021 Honda Civic</h4>
            <div class="status-token status-token-warning status-token-filled">
                <span class="status-token-label">Preview</span>
            </div>
        </div>
        <p style="margin: 0 0 var(--spacing-12); color: var(--color-light-neutral-400); font-size: var(--typography-font-size-300);">Lot #87654321 • 32,100 mi</p>
        <div style="display: flex; justify-content: space-between; align-items: center;">
            <span style="font-weight: 600;">$3,800</span>
            <button class="btn btn-default btn-secondary btn-small">View</button>
        </div>
    </div>
</div>
```

### **Member Dashboard – Quick Stats (Copart.com)**
```html
<div class="stats-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: var(--spacing-24);">
    <div class="dashboard-card">
        <div class="card-content">
            <div style="display: flex; align-items: center; gap: var(--spacing-12); margin-bottom: var(--spacing-12);">
                <span data-icon="heart" data-icon-size="24" style="color: var(--color-brand-copart-blue);"></span>
                <h4 style="margin: 0;">Watchlist</h4>
            </div>
            <p style="font-size: var(--typography-font-size-500); font-weight: 600; margin: 0;">12</p>
            <p style="color: var(--color-light-neutral-400); font-size: var(--typography-font-size-300); margin: var(--spacing-4) 0 0 0;">Saved vehicles</p>
            <button class="btn btn-default btn-secondary btn-small" style="margin-top: var(--spacing-16);">View All</button>
        </div>
    </div>
    
    <div class="dashboard-card">
        <div class="card-content">
            <div style="display: flex; align-items: center; gap: var(--spacing-12); margin-bottom: var(--spacing-12);">
                <span data-icon="clock" data-icon-size="24" style="color: var(--color-light-alert-warning-text);"></span>
                <h4 style="margin: 0;">Active Bids</h4>
            </div>
            <p style="font-size: var(--typography-font-size-500); font-weight: 600; margin: 0;">3</p>
            <p style="color: var(--color-light-neutral-400); font-size: var(--typography-font-size-300); margin: var(--spacing-4) 0 0 0;">Outstanding</p>
            <button class="btn btn-default btn-secondary btn-small" style="margin-top: var(--spacing-16);">Manage</button>
        </div>
    </div>
    
    <div class="dashboard-card">
        <div class="card-content">
            <div style="display: flex; align-items: center; gap: var(--spacing-12); margin-bottom: var(--spacing-12);">
                <span data-icon="check" data-icon-size="24" style="color: var(--color-light-alert-success-text);"></span>
                <h4 style="margin: 0;">Won</h4>
            </div>
            <p style="font-size: var(--typography-font-size-500); font-weight: 600; margin: 0;">7</p>
            <p style="color: var(--color-light-neutral-400); font-size: var(--typography-font-size-300); margin: var(--spacing-4) 0 0 0;">All time</p>
            <button class="btn btn-default btn-secondary btn-small" style="margin-top: var(--spacing-16);">History</button>
        </div>
    </div>
</div>
```

### **Bid Confirmation Modal (Copart.com)**
```html
<div id="bid-confirm-modal" class="modal-overlay">
    <div class="modal" style="max-width: 440px;">
        <div class="modal-header">
            <h3 class="modal-title">Confirm Bid</h3>
            <button class="modal-close" onclick="closeModal('bid-confirm-modal')" aria-label="Close modal">
                <span data-icon="close" data-icon-size="16"></span>
            </button>
        </div>
        <div class="modal-body">
            <div class="dashboard-card" style="margin-bottom: var(--spacing-24); padding: var(--spacing-16);">
                <p style="margin: 0 0 var(--spacing-4); color: var(--color-light-neutral-400); font-size: var(--typography-font-size-300);">Lot #12345678</p>
                <h4 style="margin: 0;">2020 Ford F-150</h4>
            </div>
            <div class="input-group">
                <label class="input-label">Your bid amount</label>
                <input type="text" class="input input-field" value="$4,500" placeholder="Enter bid">
            </div>
            <p style="font-size: var(--typography-font-size-300); color: var(--color-light-neutral-400); margin: var(--spacing-16) 0 0 0;">
                By placing this bid you agree to Copart's Terms of Service. This action cannot be undone.
            </p>
        </div>
        <div class="modal-footer">
            <button class="btn btn-default btn-secondary" onclick="closeModal('bid-confirm-modal')">Cancel</button>
            <button class="btn btn-default btn-default-type">Place Bid</button>
        </div>
    </div>
</div>
```

### **Vehicle Search Filters Bar (Copart.com)**
```html
<div style="display: flex; flex-wrap: wrap; gap: var(--spacing-12); align-items: center; padding: var(--spacing-16); background: var(--color-light-neutral-100); border-radius: var(--border-radius-200); margin-bottom: var(--spacing-24);">
    <div class="input-container" style="flex: 1; min-width: 200px;">
        <span data-icon="search" data-icon-size="16" data-icon-class="input-icon"></span>
        <input type="text" class="input input-field" placeholder="Search by make, model, lot #..." style="padding-left: var(--spacing-40);">
    </div>
    <select class="input input-field" style="min-width: 140px;">
        <option>All Makes</option>
    </select>
    <select class="input input-field" style="min-width: 140px;">
        <option>All Models</option>
    </select>
    <select class="input input-field" style="min-width: 120px;">
        <option>Year</option>
    </select>
    <button class="btn btn-default btn-secondary">
        <span data-icon="filter" data-icon-size="20"></span>
        More Filters
    </button>
    <button class="btn btn-default btn-default-type">Search</button>
</div>
```

**Status tokens for Copart.com listings:** Use `status-token-success` + "Running", `status-token-warning` + "Preview", `status-token-error` + "Sold", `status-token-neutral` + "Pending" as appropriate.

---

## **Page Layouts**

### **Basic Page Template**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Page Title</title>
    <style>
        body {
            font-family: var(--typography-font-family-base, Inter, sans-serif);
            color: var(--color-brand-copart-black, #2F333C);
            background: var(--color-brand-copart-white, #FFFFFF);
            margin: 0;
            padding: var(--spacing-32, 32px);
        }
        .page-container {
            max-width: 1200px;
            margin: 0 auto;
        }
    </style>
</head>
<body>
    <div class="page-container">
        <!-- Page content using Vallejo components -->
    </div>
</body>
</html>
```

---

## **Authentication Layouts**

### **Login Form**
```html
<div class="login-container" style="max-width: 400px; margin: 0 auto; padding: var(--spacing-40, 40px);">
    <!-- Header -->
    <div class="login-header" style="text-align: center; margin-bottom: var(--spacing-40, 40px);">
        <h1 style="color: var(--color-brand-copart-black); margin-bottom: var(--spacing-8);">Sign In</h1>
        <p style="color: var(--color-light-neutral-400); margin: 0;">Enter your credentials to access your account</p>
    </div>
    
    <!-- Form -->
    <form class="login-form">
        <div class="input-group">
            <label class="input-label" for="email">Email Address</label>
            <input type="email" id="email" class="input input-field" placeholder="Enter your email" required>
        </div>
        
        <div class="input-group">
            <label class="input-label" for="password">Password</label>
            <input type="password" id="password" class="input input-field" placeholder="Enter your password" required>
        </div>
        
        <div class="checkbox-wrapper" style="margin-bottom: var(--spacing-24);">
            <label class="checkbox-label">
                <input type="checkbox" class="checkbox-input">
                <div class="checkbox-visual">
                    <span data-icon="check" data-icon-size="12" data-icon-class="checkbox-checkmark"></span>
                </div>
                <span class="checkbox-text">Remember me</span>
            </label>
        </div>
        
        <button type="submit" class="btn btn-default btn-default-type btn-large" style="width: 100%; margin-bottom: var(--spacing-16);">
            Sign In
        </button>
        
        <div style="text-align: center;">
            <a href="#" style="color: var(--color-brand-copart-blue); text-decoration: none; font-size: var(--typography-font-size-300);">
                Forgot your password?
            </a>
        </div>
    </form>
</div>
```

### **Registration Form**
```html
<div class="registration-container" style="max-width: 500px; margin: 0 auto; padding: var(--spacing-40);">
    <div class="registration-header" style="text-align: center; margin-bottom: var(--spacing-40);">
        <h1 style="color: var(--color-brand-copart-black); margin-bottom: var(--spacing-8);">Create Account</h1>
        <p style="color: var(--color-light-neutral-400); margin: 0;">Join us to get started</p>
    </div>
    
    <form class="registration-form">
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: var(--spacing-16);">
            <div class="input-group">
                <label class="input-label" for="first-name">First Name</label>
                <input type="text" id="first-name" class="input input-field" placeholder="First name" required>
            </div>
            <div class="input-group">
                <label class="input-label" for="last-name">Last Name</label>
                <input type="text" id="last-name" class="input input-field" placeholder="Last name" required>
            </div>
        </div>
        
        <div class="input-group">
            <label class="input-label" for="reg-email">Email Address</label>
            <input type="email" id="reg-email" class="input input-field" placeholder="Enter your email" required>
        </div>
        
        <div class="input-group">
            <label class="input-label" for="reg-password">Password</label>
            <input type="password" id="reg-password" class="input input-field" placeholder="Create a password" required>
        </div>
        
        <div class="checkbox-wrapper" style="margin-bottom: var(--spacing-24);">
            <label class="checkbox-label">
                <input type="checkbox" class="checkbox-input" required>
                <div class="checkbox-visual">
                    <span data-icon="check" data-icon-size="12" data-icon-class="checkbox-checkmark"></span>
                </div>
                <span class="checkbox-text">I agree to the Terms of Service and Privacy Policy</span>
            </label>
        </div>
        
        <button type="submit" class="btn btn-default btn-default-type btn-large" style="width: 100%;">
            Create Account
        </button>
    </form>
</div>
```

---

## **Dashboard Layouts**

### **Standard Dashboard**
```html
<div class="dashboard-layout">
    <!-- Header -->
    <header class="dashboard-header" style="margin-bottom: var(--spacing-40);">
        <div style="display: flex; justify-content: space-between; align-items: center;">
            <div>
                <h1 style="color: var(--color-brand-copart-black); margin: 0 0 var(--spacing-8) 0;">Dashboard</h1>
                <p style="color: var(--color-light-neutral-400); margin: 0;">Welcome back, John</p>
            </div>
            <div style="display: flex; gap: var(--spacing-16);">
                <button class="btn btn-default btn-secondary">
                    <span data-icon="download" data-icon-size="24"></span>
                    Export
                </button>
                <button class="btn btn-default btn-default-type">
                    <span data-icon="plus" data-icon-size="24"></span>
                    Add New
                </button>
            </div>
        </div>
    </header>
    
    <!-- Stats Cards -->
    <div class="stats-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: var(--spacing-24); margin-bottom: var(--spacing-40);">
        <div class="dashboard-card">
            <div class="card-content">
                <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: var(--spacing-16);">
                    <div>
                        <p style="color: var(--color-light-neutral-400); margin: 0; font-size: var(--typography-font-size-300);">Total Sales</p>
                        <h3 style="color: var(--color-brand-copart-black); margin: var(--spacing-8) 0 0 0;">$24,580</h3>
                    </div>
                    <span data-icon="arrow-up" data-icon-size="24" style="color: var(--color-light-alert-success-text);"></span>
                </div>
                <div class="status-token status-token-success status-token-filled">
                    <span class="status-token-label">+12.3%</span>
                </div>
            </div>
        </div>
        
        <div class="dashboard-card">
            <div class="card-content">
                <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: var(--spacing-16);">
                    <div>
                        <p style="color: var(--color-light-neutral-400); margin: 0; font-size: var(--typography-font-size-300);">Orders</p>
                        <h3 style="color: var(--color-brand-copart-black); margin: var(--spacing-8) 0 0 0;">1,247</h3>
                    </div>
                    <span data-icon="truck" data-icon-size="24" style="color: var(--color-brand-copart-blue);"></span>
                </div>
                <div class="status-token status-token-warning status-token-filled">
                    <span class="status-token-label">Processing</span>
                </div>
            </div>
        </div>
        
        <div class="dashboard-card">
            <div class="card-content">
                <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: var(--spacing-16);">
                    <div>
                        <p style="color: var(--color-light-neutral-400); margin: 0; font-size: var(--typography-font-size-300);">Customers</p>
                        <h3 style="color: var(--color-brand-copart-black); margin: var(--spacing-8) 0 0 0;">892</h3>
                    </div>
                    <span data-icon="user" data-icon-size="24" style="color: var(--color-light-neutral-400);"></span>
                </div>
                <div class="status-token status-token-neutral status-token-filled">
                    <span class="status-token-label">Active</span>
                </div>
            </div>
        </div>
    </div>
    
    <!-- Main Content Area -->
    <div style="display: grid; grid-template-columns: 2fr 1fr; gap: var(--spacing-32);">
        <!-- Chart Card -->
        <div class="dashboard-card">
            <div class="card-header">
                <h3 class="card-title">Revenue Overview</h3>
            </div>
            <div class="card-content">
                <div style="height: 300px; display: flex; align-items: center; justify-content: center; background: var(--color-light-neutral-100); border-radius: var(--border-radius-200);">
                    <p style="color: var(--color-light-neutral-400);">Chart placeholder</p>
                </div>
            </div>
        </div>
        
        <!-- Activity Feed -->
        <div class="dashboard-card">
            <div class="card-header">
                <h3 class="card-title">Recent Activity</h3>
            </div>
            <div class="card-content">
                <div style="display: flex; flex-direction: column; gap: var(--spacing-16);">
                    <div style="display: flex; align-items: center; gap: var(--spacing-12);">
                        <span data-icon="user" data-icon-size="20" style="color: var(--color-light-neutral-400);"></span>
                        <div>
                            <p style="margin: 0; font-size: var(--typography-font-size-300);">New customer registered</p>
                            <p style="margin: 0; font-size: var(--typography-font-size-200); color: var(--color-light-neutral-400);">2 minutes ago</p>
                        </div>
                    </div>
                    <!-- More activity items... -->
                </div>
            </div>
        </div>
    </div>
</div>
```

---

## **Data Display Layouts**

### **Table View**
```html
<div class="table-layout">
    <!-- Table Header -->
    <div class="table-header" style="display: flex; justify-content: space-between; align-items: center; margin-bottom: var(--spacing-24);">
        <div>
            <h2 style="color: var(--color-brand-copart-black); margin: 0;">Customer Orders</h2>
            <p style="color: var(--color-light-neutral-400); margin: var(--spacing-8) 0 0 0;">Manage and track all customer orders</p>
        </div>
        <div style="display: flex; gap: var(--spacing-16);">
            <div class="input-container">
                <span data-icon="search" data-icon-size="16" data-icon-class="input-icon"></span>
                <input type="text" class="input input-field" placeholder="Search orders..." style="padding-left: var(--spacing-40);">
            </div>
            <button class="btn btn-default btn-secondary">
                <span data-icon="filter" data-icon-size="24"></span>
                Filter
            </button>
        </div>
    </div>
    
    <!-- Table -->
    <div class="table-container">
        <table class="table">
            <thead>
                <tr>
                    <th>Order ID</th>
                    <th>Customer</th>
                    <th>Date</th>
                    <th>Amount</th>
                    <th>Status</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>#12345</td>
                    <td>John Smith</td>
                    <td>2024-01-15</td>
                    <td>$1,234.56</td>
                    <td>
                        <div class="status-token status-token-success status-token-filled">
                            <span class="status-token-label">Completed</span>
                        </div>
                    </td>
                    <td>
                        <div style="display: flex; gap: var(--spacing-8);">
                            <button class="btn btn-small btn-subtle" aria-label="View order">
                                <span data-icon="eye" data-icon-size="16"></span>
                            </button>
                            <button class="btn btn-small btn-subtle" aria-label="Edit order">
                                <span data-icon="edit" data-icon-size="16"></span>
                            </button>
                        </div>
                    </td>
                </tr>
                <!-- More rows... -->
            </tbody>
        </table>
    </div>
    
    <!-- Pagination -->
    <div class="pagination-container" style="display: flex; justify-content: space-between; align-items: center; margin-top: var(--spacing-32);">
        <p style="color: var(--color-light-neutral-400); margin: 0;">Showing 1-10 of 247 orders</p>
        <div class="pagination">
            <button class="btn btn-default btn-secondary">Previous</button>
            <button class="btn btn-default btn-secondary active">1</button>
            <button class="btn btn-default btn-secondary">2</button>
            <button class="btn btn-default btn-secondary">3</button>
            <button class="btn btn-default btn-secondary">Next</button>
        </div>
    </div>
</div>
```

---

## **Form Layouts**

### **Multi-Step Form**
```html
<div class="multi-step-form" style="max-width: 600px; margin: 0 auto;">
    <!-- Progress Indicator -->
    <div class="progress-tracker" style="margin-bottom: var(--spacing-40);">
        <div class="progress-steps" style="display: flex; justify-content: space-between;">
            <div class="progress-step completed">
                <div class="progress-step-indicator">
                    <span data-icon="check" data-icon-size="16"></span>
                </div>
                <div class="progress-step-label">Personal Info</div>
            </div>
            <div class="progress-step active">
                <div class="progress-step-indicator">2</div>
                <div class="progress-step-label">Company Details</div>
            </div>
            <div class="progress-step">
                <div class="progress-step-indicator">3</div>
                <div class="progress-step-label">Review</div>
            </div>
        </div>
    </div>
    
    <!-- Form Content -->
    <div class="form-step" id="step-2">
        <h2 style="color: var(--color-brand-copart-black); margin-bottom: var(--spacing-24);">Company Details</h2>
        
        <div class="input-group">
            <label class="input-label" for="company">Company Name</label>
            <input type="text" id="company" class="input input-field" placeholder="Enter company name" required>
        </div>
        
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: var(--spacing-16);">
            <div class="input-group">
                <label class="input-label" for="industry">Industry</label>
                <select id="industry" class="input input-field" required>
                    <option value="">Select industry</option>
                    <option value="tech">Technology</option>
                    <option value="finance">Finance</option>
                    <option value="retail">Retail</option>
                </select>
            </div>
            <div class="input-group">
                <label class="input-label" for="size">Company Size</label>
                <select id="size" class="input input-field" required>
                    <option value="">Select size</option>
                    <option value="1-10">1-10 employees</option>
                    <option value="11-50">11-50 employees</option>
                    <option value="51-200">51-200 employees</option>
                </select>
            </div>
        </div>
        
        <div class="input-group">
            <label class="input-label" for="address">Address</label>
            <textarea id="address" class="input input-field" placeholder="Enter company address" rows="3"></textarea>
        </div>
        
        <!-- Navigation Buttons -->
        <div style="display: flex; justify-content: space-between; margin-top: var(--spacing-32);">
            <button type="button" class="btn btn-default btn-secondary">
                <span data-icon="chevron-left" data-icon-size="24"></span>
                Previous
            </button>
            <button type="button" class="btn btn-default btn-default-type">
                Next
                <span data-icon="chevron-right" data-icon-size="24"></span>
            </button>
        </div>
    </div>
</div>
```

### **Contact Form**
```html
<div class="contact-form" style="max-width: 500px; margin: 0 auto;">
    <div class="form-header" style="text-align: center; margin-bottom: var(--spacing-40);">
        <h2 style="color: var(--color-brand-copart-black); margin-bottom: var(--spacing-8);">Get In Touch</h2>
        <p style="color: var(--color-light-neutral-400); margin: 0;">We'd love to hear from you</p>
    </div>
    
    <form>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: var(--spacing-16);">
            <div class="input-group">
                <label class="input-label" for="contact-first-name">First Name</label>
                <input type="text" id="contact-first-name" class="input input-field" placeholder="First name" required>
            </div>
            <div class="input-group">
                <label class="input-label" for="contact-last-name">Last Name</label>
                <input type="text" id="contact-last-name" class="input input-field" placeholder="Last name" required>
            </div>
        </div>
        
        <div class="input-group">
            <label class="input-label" for="contact-email">Email</label>
            <input type="email" id="contact-email" class="input input-field" placeholder="your@email.com" required>
        </div>
        
        <div class="input-group">
            <label class="input-label" for="contact-subject">Subject</label>
            <input type="text" id="contact-subject" class="input input-field" placeholder="What's this about?" required>
        </div>
        
        <div class="input-group">
            <label class="input-label" for="contact-message">Message</label>
            <textarea id="contact-message" class="input input-field" placeholder="Tell us more..." rows="5" required></textarea>
        </div>
        
        <button type="submit" class="btn btn-default btn-default-type btn-large" style="width: 100%;">
            <span data-icon="arrow-right" data-icon-size="24"></span>
            Send Message
        </button>
    </form>
</div>
```

---

## **Modal Layouts**

### **Confirmation Modal**
```html
<div id="confirm-modal" class="modal-overlay">
    <div class="modal" style="max-width: 400px;">
        <div class="modal-header">
            <h3 class="modal-title">Confirm Delete</h3>
            <button class="modal-close" onclick="closeModal('confirm-modal')" aria-label="Close modal">
                <span data-icon="close" data-icon-size="16"></span>
            </button>
        </div>
        <div class="modal-body">
            <div style="text-align: center;">
                <div style="margin-bottom: var(--spacing-24);">
                    <span data-icon="warning" data-icon-size="48" style="color: var(--color-light-alert-error-text);"></span>
                </div>
                <p style="margin-bottom: var(--spacing-8);">Are you sure you want to delete this item?</p>
                <p style="color: var(--color-light-neutral-400); margin: 0; font-size: var(--typography-font-size-300);">This action cannot be undone.</p>
            </div>
        </div>
        <div class="modal-footer">
            <button class="btn btn-default btn-secondary" onclick="closeModal('confirm-modal')">Cancel</button>
            <button class="btn btn-default btn-default-type" onclick="confirmDelete()" style="background: var(--color-light-alert-error-text);">Delete</button>
        </div>
    </div>
</div>
```

### **Form Modal**
```html
<div id="form-modal" class="modal-overlay">
    <div class="modal" style="max-width: 500px;">
        <div class="modal-header">
            <h3 class="modal-title">Add New Item</h3>
            <button class="modal-close" onclick="closeModal('form-modal')" aria-label="Close modal">
                <span data-icon="close" data-icon-size="16"></span>
            </button>
        </div>
        <div class="modal-body">
            <form id="modal-form">
                <div class="input-group">
                    <label class="input-label" for="modal-name">Item Name</label>
                    <input type="text" id="modal-name" class="input input-field" placeholder="Enter name" required>
                </div>
                
                <div class="input-group">
                    <label class="input-label" for="modal-description">Description</label>
                    <textarea id="modal-description" class="input input-field" placeholder="Enter description" rows="3"></textarea>
                </div>
                
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: var(--spacing-16);">
                    <div class="input-group">
                        <label class="input-label" for="modal-category">Category</label>
                        <select id="modal-category" class="input input-field" required>
                            <option value="">Select category</option>
                            <option value="cat1">Category 1</option>
                            <option value="cat2">Category 2</option>
                        </select>
                    </div>
                    <div class="input-group">
                        <label class="input-label" for="modal-priority">Priority</label>
                        <select id="modal-priority" class="input input-field" required>
                            <option value="">Select priority</option>
                            <option value="high">High</option>
                            <option value="medium">Medium</option>
                            <option value="low">Low</option>
                        </select>
                    </div>
                </div>
            </form>
        </div>
        <div class="modal-footer">
            <button class="btn btn-default btn-secondary" onclick="closeModal('form-modal')">Cancel</button>
            <button class="btn btn-default btn-default-type" onclick="submitForm()">Add Item</button>
        </div>
    </div>
</div>
```

---

## **Error & Empty States**

### **404 Error Page**
```html
<div class="error-page" style="text-align: center; padding: var(--spacing-64) var(--spacing-32);">
    <div style="margin-bottom: var(--spacing-40);">
        <span data-icon="error" data-icon-size="64" style="color: var(--color-light-neutral-400);"></span>
    </div>
    <h1 style="color: var(--color-brand-copart-black); margin-bottom: var(--spacing-16);">Page Not Found</h1>
    <p style="color: var(--color-light-neutral-400); margin-bottom: var(--spacing-32); max-width: 400px; margin-left: auto; margin-right: auto;">
        The page you're looking for doesn't exist or has been moved.
    </p>
    <div style="display: flex; gap: var(--spacing-16); justify-content: center;">
        <button class="btn btn-default btn-secondary" onclick="history.back()">
            <span data-icon="chevron-left" data-icon-size="24"></span>
            Go Back
        </button>
        <button class="btn btn-default btn-default-type" onclick="location.href='/'">
            <span data-icon="home" data-icon-size="24"></span>
            Home
        </button>
    </div>
</div>
```

### **Empty State**
```html
<div class="empty-state" style="text-align: center; padding: var(--spacing-48) var(--spacing-32);">
    <div style="margin-bottom: var(--spacing-32);">
        <span data-icon="folder" data-icon-size="48" style="color: var(--color-light-neutral-400);"></span>
    </div>
    <h3 style="color: var(--color-brand-copart-black); margin-bottom: var(--spacing-16);">No Items Found</h3>
    <p style="color: var(--color-light-neutral-400); margin-bottom: var(--spacing-32); max-width: 300px; margin-left: auto; margin-right: auto;">
        You haven't created any items yet. Get started by adding your first item.
    </p>
    <button class="btn btn-default btn-default-type">
        <span data-icon="plus" data-icon-size="24"></span>
        Add First Item
    </button>
</div>
```

---

## **Responsive Patterns**

### **Mobile-First Grid**
```css
/* Mobile first approach */
.responsive-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: var(--spacing-16);
    padding: var(--spacing-16);
}

/* Tablet */
@media (min-width: 768px) {
    .responsive-grid {
        grid-template-columns: repeat(2, 1fr);
        gap: var(--spacing-24);
        padding: var(--spacing-24);
    }
}

/* Desktop */
@media (min-width: 1024px) {
    .responsive-grid {
        grid-template-columns: repeat(3, 1fr);
        gap: var(--spacing-32);
        padding: var(--spacing-32);
        max-width: 1200px;
        margin: 0 auto;
    }
}
```

### **Responsive Navigation**
```html
<nav class="main-nav" style="display: flex; justify-content: space-between; align-items: center; padding: var(--spacing-16); border-bottom: 1px solid var(--color-light-neutral-200);">
    <div class="nav-brand">
        <h2 style="color: var(--color-brand-copart-black); margin: 0;">Brand</h2>
    </div>
    
    <!-- Desktop Navigation -->
    <div class="nav-links" style="display: none; gap: var(--spacing-32);">
        <a href="#" style="color: var(--color-brand-copart-black); text-decoration: none;">Dashboard</a>
        <a href="#" style="color: var(--color-light-neutral-400); text-decoration: none;">Orders</a>
        <a href="#" style="color: var(--color-light-neutral-400); text-decoration: none;">Customers</a>
        <a href="#" style="color: var(--color-light-neutral-400); text-decoration: none;">Settings</a>
    </div>
    
    <!-- Mobile Menu Button -->
    <button class="mobile-menu-toggle btn btn-subtle btn-icon-only" aria-label="Toggle menu">
        <span data-icon="menu" data-icon-size="24"></span>
    </button>
</nav>

<style>
@media (min-width: 768px) {
    .nav-links {
        display: flex !important;
    }
    .mobile-menu-toggle {
        display: none;
    }
}
</style>
```

These layout patterns provide a solid foundation for building consistent, accessible interfaces with the Vallejo Design System. Each pattern uses the proper component classes and design tokens for optimal results.